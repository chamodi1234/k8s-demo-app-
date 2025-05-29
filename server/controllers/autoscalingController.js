// controllers/autoscalingController.js

const autoscalingState = {
  pods: [{ id: 1, cpu: 20, memory: 30 }],
  nodes: [{ id: 1, pods: 1 }],
  cpuLoad: 20,
  memoryLoad: 30,
  metrics: [{ time: '0s', cpu: 20, memory: 30 }], // Metrics example
};

const getAutoscalingState = (req, res) => {
  res.json(autoscalingState);
};

const addLoad = (req, res) => {
  // Increase the load values
  autoscalingState.cpuLoad = Math.min(autoscalingState.cpuLoad + 10, 100);
  autoscalingState.memoryLoad = Math.min(autoscalingState.memoryLoad + 15, 100);

  // Add pods and nodes if necessary
  if (autoscalingState.cpuLoad >= 50 && autoscalingState.pods.length < 5) {
    autoscalingState.pods.push({ id: autoscalingState.pods.length + 1, cpu: 20, memory: 30 });
    if (autoscalingState.pods.length % 3 === 0) {
      autoscalingState.nodes.push({ id: autoscalingState.nodes.length + 1, pods: 1 });
    }
  }

  // Simulate metrics update
  autoscalingState.metrics.push({
    time: `${autoscalingState.metrics.length * 10}s`,
    cpu: autoscalingState.cpuLoad,
    memory: autoscalingState.memoryLoad,
  });

  res.json(autoscalingState);
};

const reduceLoad = (req, res) => {
  // Reduce the load values
  autoscalingState.cpuLoad = Math.max(autoscalingState.cpuLoad - 10, 0);
  autoscalingState.memoryLoad = Math.max(autoscalingState.memoryLoad - 15, 0);

  // Remove pods and nodes if necessary
  if (autoscalingState.cpuLoad < 30 && autoscalingState.pods.length > 1) {
    autoscalingState.pods.pop();
    if (autoscalingState.pods.length % 3 === 0 && autoscalingState.nodes.length > 1) {
      autoscalingState.nodes.pop();
    }
  }

  // Simulate metrics update
  autoscalingState.metrics.push({
    time: `${autoscalingState.metrics.length * 10}s`,
    cpu: autoscalingState.cpuLoad,
    memory: autoscalingState.memoryLoad,
  });

  res.json(autoscalingState);
};

module.exports = { getAutoscalingState, addLoad, reduceLoad };
