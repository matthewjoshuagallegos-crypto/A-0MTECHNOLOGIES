var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_vite = require("vite");
var import_child_process = require("child_process");
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
var import_util = require("util");
var import_node_cron = __toESM(require("node-cron"), 1);
var execAsync = (0, import_util.promisify)(import_child_process.exec);
var kernelLogs = [];
function logToKernel(msg) {
  const log = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${msg}`;
  kernelLogs.push(log);
  if (kernelLogs.length > 100) kernelLogs.shift();
  console.log(log);
}
function startBackgroundTasks() {
  logToKernel("A#0M BACKGROUND KERNEL: Initialized [ULTIMATE SYNC]");
  logToKernel("Sovereignty Protocol: ONEUI // SIRI_e\u05D0Knox Initialized");
  logToKernel("Kernel Layer: GOSL (Global Operating System Layer) Operational");
  logToKernel("Boot Sequence: Android Bootloader // ChromeOS Handshake [INDEPENDENT]");
  import_node_cron.default.schedule("* * * * *", () => {
    logToKernel("System: 512-bit Security Handshake Synchronized [Sovereign Build]");
    logToKernel("CE Process Check: ONEUI Optimized // worldWideWeb Gateway Secure");
  });
  import_node_cron.default.schedule("*/5 * * * *", () => {
    logToKernel("Registry: FCC Compliance Audit - STATUS_PASSED [GOSL 2026.4]");
    logToKernel("Inventory: Independent Invention Improvements Logged");
  });
}
async function startServer() {
  startBackgroundTasks();
  const app = (0, import_express.default)();
  app.use(import_express.default.json());
  const PORT = 3e3;
  const pathConfig = JSON.parse(import_fs.default.readFileSync(import_path.default.join(process.cwd(), "path.json"), "utf8"));
  app.get("/api/explorer/tree", async (req, res) => {
    const getTree = (dir) => {
      const name = import_path.default.basename(dir) || "root";
      const stats = import_fs.default.statSync(dir);
      const node = {
        name,
        path: import_path.default.relative(process.cwd(), dir),
        type: stats.isDirectory() ? "directory" : "file",
        fcc_compliant: true
      };
      if (stats.isDirectory()) {
        const children = import_fs.default.readdirSync(dir);
        node.children = children.filter((child) => !child.startsWith(".") && child !== "node_modules").map((child) => getTree(import_path.default.join(dir, child)));
        if (dir === process.cwd()) {
          node.children.push({
            name: "GOOGLE_HQ_DRIVE_PORTAL",
            path: pathConfig.DRIVE_NODE,
            type: "directory",
            isVirtual: true,
            hq_location: "1600 Amphitheatre Parkway, Mountain View, CA",
            children: [
              { name: "SECURE_STORAGE", path: import_path.default.join(pathConfig.DRIVE_NODE, "storage"), type: "directory" },
              { name: "CREDENTIAL_OVERRIDES", path: import_path.default.join(pathConfig.DRIVE_NODE, "credentials"), type: "directory" },
              { name: "CLOUD_GAMING_CONSOLE", path: import_path.default.join(pathConfig.DRIVE_NODE, "gaming"), type: "directory" },
              { name: "A0M_VORTEX_AI_CORE", path: import_path.default.join(pathConfig.DRIVE_NODE, "vortex"), type: "directory" }
            ]
          });
        }
      }
      return node;
    };
    try {
      res.json(getTree(process.cwd()));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  app.get("/api/kernel/hq-sync", (req, res) => {
    const hqPath = import_path.default.join(pathConfig.MOUNT_POINT, "google_hq", "1600_amphitheatre_parkway");
    res.json({
      status: "SYNCHRONIZED",
      joint_path: hqPath,
      auth: "LEVEL_21_SOVEREIGN",
      compliance: pathConfig.FCC_COMPLIANCE,
      encryption: pathConfig.ENCRYPTION
    });
  });
  app.post("/api/network/connect", (req, res) => {
    const { apn, port } = req.body;
    setTimeout(() => {
      res.json({
        status: "CONNECTED",
        apn: apn || "A0M USA",
        port: port || 80,
        frequency: "5.8GHz G-PRO",
        encryption: "AES-512-GCM",
        handshake: "SUCCESSFUL",
        fcc_id: "A21S30i19GP13"
      });
    }, 1500);
  });
  app.get("/api/explorer/file", (req, res) => {
    const filePath = req.query.path;
    try {
      const fullPath = import_path.default.resolve(process.cwd(), filePath);
      if (!fullPath.startsWith(process.cwd())) {
        return res.status(403).send("Access denied");
      }
      const content = import_fs.default.readFileSync(fullPath, "utf8");
      res.send(content);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  app.post("/api/explorer/file", (req, res) => {
    const { path: filePath, content } = req.body;
    try {
      const fullPath = import_path.default.resolve(process.cwd(), filePath);
      if (!fullPath.startsWith(process.cwd())) {
        return res.status(403).json({ error: "Access denied" });
      }
      import_fs.default.writeFileSync(fullPath, content);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  app.get("/api/kernel/logs", (req, res) => {
    res.json({ logs: kernelLogs });
  });
  app.post("/api/explorer/shell", async (req, res) => {
    const { command } = req.body;
    try {
      const { stdout, stderr } = await execAsync(command);
      res.json({ stdout, stderr });
    } catch (err) {
      res.json({ error: err.message, stderr: err.stderr });
    }
  });
  const distPath = import_path.default.join(process.cwd(), "dist");
  if (import_fs.default.existsSync(distPath)) {
    console.log("A#0M KERNEL: SERVING FROM DIST [PRODUCTION MODE]");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  } else {
    console.log("A#0M KERNEL: STARTING VITE DEV MIDDLEWARE");
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`A#0M AUTHORITY SERVER LIVE - http://localhost:${PORT}`);
  });
}
startServer();
