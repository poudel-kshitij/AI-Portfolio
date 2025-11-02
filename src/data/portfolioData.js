export const posts = [
  {
    id: 1,
    title: "AI for Secure 3D Printing",
    date: "Oct 2025",
    minutes: 6,
    summary:
      "Using Bi-LSTM models and sensor telemetry to detect misalignment, voids, and under-extrusion in additive manufacturing processes.",
    image: "/assets/blogs/ai-3dprinting.png",
    tags: ["AI", "Manufacturing", "Security"],
    content: `
**Abstract**

Additive manufacturing (AM), or 3D printing, increasingly integrates AI-based monitoring systems to ensure product quality and detect early anomalies like misalignment, voids, or under-extrusion. In this work, I developed a Bi-LSTM model using time-series G-code telemetry (X, Y, Z, E, and F parameters) to identify real-time anomalies during fused filament fabrication (FFF).

---

### 🧩 Data and Feature Engineering

Each line in a G-code file encodes printer motion, temperature, and extrusion commands:

\`\`\`
G1 X12.4 Y18.2 Z0.3 E0.002 F1500
\`\`\`

We convert these sequential parameters into time-synchronized vectors:

- \( X_t, Y_t, Z_t \): Cartesian coordinates  
- \( E_t \): Extrusion length  
- \( F_t \): Feed rate  

A multivariate sequence of these features becomes the Bi-LSTM input. Data normalization ensures stable gradients:

\[
X' = \frac{X - \mu_X}{\sigma_X}
\]

---

### 🧠 Model Architecture

The architecture integrates stacked Bi-LSTM layers with dense softmax output to classify states:

\`\`\`python
model = Sequential([
  Bidirectional(LSTM(128, return_sequences=True)),
  Dropout(0.2),
  LSTM(64),
  Dense(3, activation='softmax')
])
\`\`\`

Classes:
1. Normal extrusion  
2. Misalignment  
3. Under-extrusion  

Accuracy: **94.7%** on validation data (20k samples).

---

### 🔒 Security & Network Integration

Anomaly flags are transmitted over MQTT → cloud (AWS IoT Core) → dashboard.

Data encryption: AES-128 for packet-level security.  
Visualization: Real-time error heatmap overlayed on 3D model (see below).

![3D Anomaly Heatmap](/assets/blogs/heatmap-voids.png)

---

### ⚙️ Mathematical Insight

Bi-LSTM captures both past and future context of toolpath:

\[
h_t = \text{LSTM}(x_t, h_{t-1}, c_{t-1}), \quad h'_t = \text{LSTM}(x_t, h_{t+1}, c_{t+1})
\]

Total representation = \( [h_t; h'_t] \)

---

### 🔗 References
- [TensorFlow Bi-LSTM Docs](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Bidirectional)
- [NIST Additive Manufacturing Data](https://www.nist.gov/)
- My GitHub: [AI-Secure3D](https://github.com/poudel-kshitij)
`,
  },

  {
    id: 2,
    title: "Pathfinding Visualizer in C++ + React",
    date: "Sep 2025",
    minutes: 5,
    summary:
      "Building an interactive visualization tool that simulates shortest-path algorithms like Dijkstra and A* across dynamic grids using React + C++ backend.",
    image: "/assets/blogs/pathfinding.png",
    tags: ["C++", "React", "Visualization"],
    content: `
**Overview**

This project combines the raw efficiency of C++ pathfinding algorithms with a visually engaging React front-end. The system simulates Dijkstra, A*, BFS, and DFS algorithms in a city-map style grid.

---

### ⚙️ Architecture

**Frontend:** React + D3.js for rendering.  
**Backend:** C++ REST API using Pistache library to compute paths.

Data flow:
\`\`\`
User Click → React UI (start/end nodes)
  → POST to /api/path (C++)
  → Algorithm runs (Dijkstra / A*)
  → Path returned as JSON
  → Animated path rendering
\`\`\`

---

### 🔢 Algorithm Core

**Dijkstra’s Algorithm (C++ Implementation)**

\`\`\`cpp
while (!pq.empty()) {
    auto [dist, node] = pq.top();
    pq.pop();
    for (auto &[nbr, weight] : adj[node]) {
        if (dist + weight < d[nbr]) {
            d[nbr] = dist + weight;
            parent[nbr] = node;
            pq.push({d[nbr], nbr});
        }
    }
}
\`\`\`

**A* Heuristic**
\[
f(n) = g(n) + h(n)
\]
where  
\( g(n) \) = cost so far,  
\( h(n) \) = Euclidean distance to goal.

---

### 🎨 Visualization

Each node = grid cell; each algorithm iteration highlights:

- Green = open set  
- Red = closed set  
- Blue = final path  

![A* Path Visualization](/assets/blogs/a-star-visual.png)

---

### 🔗 Resources

- [Amit Patel’s Pathfinding Guide](https://www.redblobgames.com/pathfinding/a-star/)
- [Pistache C++ REST Framework](https://github.com/pistacheio/pistache)
- My Repo: [Pathfinder Visualizer](https://github.com/poudel-kshitij/Pathfinding)
`,
  },

  {
    id: 3,
    title: "ETL & Forecasting for Urban Traffic",
    date: "Aug 2024",
    minutes: 7,
    summary:
      "Building real-time traffic forecasting pipelines using PySpark, AWS Glue, and Bi-LSTM time-series models.",
    image: "/assets/blogs/traffic-forecast.png",
    tags: ["Data", "Time-Series", "AWS"],
    content: `
**Objective**

City traffic forecasting requires scalable ETL and ML pipelines. Here, we use **AWS Glue**, **PySpark**, and **Bi-LSTM** to predict traffic congestion patterns from live feeds.

---

### 🚦 Data Flow

1. **Ingestion:** AWS Kinesis streams live traffic sensor data.  
2. **Transformation:** PySpark cleans timestamps, removes nulls, resamples into 10-min bins.  
3. **Load:** Data saved into AWS S3 (Parquet) and queried using Athena.  
4. **Forecast:** Bi-LSTM model predicts next-hour congestion levels.

![Traffic ETL Flow](/assets/blogs/etl-pipeline.png)

---

### 🧮 Model Equation

Given traffic volume sequence \( x_t \):

\[
h_t = f(W_h x_t + U_h h_{t-1} + b_h), \quad y_t = W_y h_t + b_y
\]

For multi-step forecasting:
\[
\hat{y}_{t+k} = F(x_t, x_{t-1}, ..., x_{t-n})
\]

---

### 🧠 Implementation Snippet

\`\`\`python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

model = Sequential([
  LSTM(128, input_shape=(30, 5), return_sequences=True),
  LSTM(64),
  Dense(1)
])
model.compile(optimizer='adam', loss='mse')
\`\`\`

---

### 📊 Results

| Metric | Value |
|--------|-------|
| RMSE | 0.085 |
| MAE  | 0.041 |
| R²   | 0.92  |

The Bi-LSTM captured cyclical rush-hour patterns (8 AM, 6 PM peaks) more accurately than ARIMA or Prophet models.

---

### 🔗 References
- [AWS Glue Data Catalog](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html)
- [TensorFlow LSTM Docs](https://www.tensorflow.org/guide/keras/rnn)
- [Kshitij’s GitHub – UrbanTrafficETL](https://github.com/poudel-kshitij/UrbanTrafficETL)
`,
  },
  {
    id: 4,
    title: "CAD Modeling with JS",
    date: "Sep 2021",
    minutes: 2,
    summary:
      "Building an interactive augumented reality (AR) and tools that simulates real-workd environment",
    image: "/assets/blogs/pathfinding.png",
    tags: ["Unity", "JavaScript", "AR", "3D Modeling", "Lenstudio"],
    content: 'Exploring how 3D CAD designs can be integrated with Lens Studio using JavaScript-based parametric modeling for AR environments. Demonstrated pipeline from Fusion 360/SolidWorks exports to GLTF/OBJ imports within Lens Studio, adding interactivity through JS patch scripting. The project highlights the convergence of mechanical design and AR visualization, enabling real-time manipulation of 3D objects in immersive filters and AR experiences.',
  },
];
