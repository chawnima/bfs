class GraphLokasi {
  constructor() {
      this.graph = {};
  }

  tambahNode(start, end) {
      if (!(start in this.graph)) {
          this.graph[start] = [];
      }
      this.graph[start].push(end);
  }
}

function bfs(graph, start, goal, visited, path) {
  const queue = [];
  queue.push(start);
  visited.add(start);
  while(queue.length > 0){
    const node = queue.pop();
    path.push(node);
    if (node === goal) {
        return true;
    }

    for (const sekeliling of graph.graph[node] || []) {
        if (!visited.has(sekeliling)) {
          queue.push(sekeliling);
          visited.add(sekeliling);
        }
    }
  }
  return false;
}

function pencariRute(graph, start, goal) {
  const visited = new Set();
  const path = [];
  if (bfs(graph, start, goal, visited, path)) {
    document.getElementsByClassName('pathRute')[0].textContent = `Rute yang diperoleh dari ${start} ke ${goal}: ${path.join(" > ")}`;
  } else {
    document.getElementsByClassName('pathRute')[0].textContent = `Tidak ditemukan rute dari ${start} ke ${goal}`;
  }
}


const g = new GraphLokasi();
function tambahNode(){
    let nodeAwal = document.getElementsByClassName('nodeAwal')[0].value;
    let nodeTujuan = document.getElementsByClassName('nodeTujuan')[0].value;
    g.tambahNode(nodeAwal, nodeTujuan);
    document.getElementsByClassName('daftarNode')[0].textContent += '[' + nodeAwal + ' > ' + nodeTujuan + ']';
}

function rute(){
    const startLandmark = document.getElementsByClassName('startLandmark')[0].value;
    const goalLandmark = document.getElementsByClassName('goalLandmark')[0].value;
    pencariRute(g, startLandmark, goalLandmark);
}

