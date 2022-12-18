import { apiProvider } from "./provider";
export class ApiCore {
  constructor(options) {
    if (options.getSingle) {
      this.getSingle = (id) => {
        return apiProvider.getSingle(options.url, id);
      };
    }
  }
}
