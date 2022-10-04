export default class ProductsApi {
  static apiBase = 'https://ayoub-chahir-scandi-api.herokuapp.com/api';

  static accessApi = async (urlPartial, requestMethod, params = false) => {
    const fullUrl = `${ProductsApi.apiBase}/${urlPartial}`;
    let response;
    if (requestMethod !== 'GET' && params) {
      response = await fetch(fullUrl, {
        method: requestMethod,
        body: JSON.stringify(params),
      });
    } else response = await fetch(fullUrl);
    if (!response.ok) throw new Error(`Could not fetch ${fullUrl} received ${response.status}`);
    else return response.json();
  };

  static async store(product) {
    return ProductsApi.accessApi('products/store', 'POST', product);
  }

  static async all() {
    return ProductsApi.accessApi('products', 'GET');
  }

  static async getTypes() {
    return ProductsApi.accessApi('product-types', 'GET');
  }

  static async getSpecAttr(type) {
    return ProductsApi.accessApi(`spec-attrs/${type}`, 'GET');
  }

  static async delete(params) {
    return ProductsApi.accessApi('products/delete', 'DELETE', params);
  }
}
