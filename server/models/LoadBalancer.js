// models/LoadBalancer.js

class LoadBalancer {
  constructor() {
    this.servers = [0, 0, 0]; // Initial 3 servers with 0 load
    this.maxLoadPerServer = 9;
  }

  // Method to assign traffic to the server with the least load
  assignRequest() {
    const minLoadIndex = this.servers.indexOf(Math.min(...this.servers));
    this.servers[minLoadIndex] += 1;

    // Auto-scale if load exceeds max capacity
    if (this.servers[minLoadIndex] > this.maxLoadPerServer) {
      this.servers.push(1);
      
    }

    return this.servers;
  }

  // Method to reset the traffic
  resetTraffic() {
    this.servers = [0, 0, 0];
    return this.servers;
  }
}






module.exports = new LoadBalancer();
