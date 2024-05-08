/*instrumentation.js*/
// Require dependencies
const { NodeSDK } = require("@opentelemetry/sdk-node");
const { ConsoleSpanExporter } = require("@opentelemetry/sdk-trace-node");
const { ZipkinExporter } = require("@opentelemetry/exporter-zipkin");
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");
const {
  PeriodicExportingMetricReader,
  ConsoleMetricExporter,
} = require("@opentelemetry/sdk-metrics");
// Configure Zipkin exporter
const zipkinExporter = new ZipkinExporter({
  url: "http://localhost:9411/api/v2/spans",
  serviceName: "sand",
});
const sdk = new NodeSDK({
  traceExporter: zipkinExporter,
  metricReader: new PeriodicExportingMetricReader({
    exporter: new ConsoleMetricExporter(),
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
