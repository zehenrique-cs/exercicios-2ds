
const { carregarConfig } = require("./config");

function handler(req, res) {
  const config = carregarConfig();

  if (req.url === "/") {
    res.statusCode = 200;
    res.end(`Status do servico: ${config.servico}`);
  } 
  
  else if (req.url === "/alo") {
    res.statusCode = 200;
    res.end("alo");
  } 
  
  else if (req.url === "/status") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    
    res.end(JSON.stringify({
      online: true,
      ...config
    }));
  } 
  
  else if (req.url === "/versao") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    
    res.end(JSON.stringify({
      servico: config.servico,
      versao: process.env.VERSAO || "1.0.0"
    }));
  } 
  
  else {
    res.statusCode = 404;
    res.end("Rota nao encontrada");
  }
}

module.exports = handler;
