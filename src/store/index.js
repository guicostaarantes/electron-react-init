import developmentStore from "./settings/store.development";
import productionStore from "./settings/store.production";

export default process.env.NODE_ENV === "production" ? productionStore : developmentStore;
