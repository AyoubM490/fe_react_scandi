import ProductsApi from './ProductsApi';
import Validation from './Validation';

export default class Product extends ProductsApi {
  save = async () => {
    let width;
    let height;
    let length;
    const errorsWrapper = document.querySelector('#errors-wrapper');
    const product = {};
    const productType = document.querySelector('#productType');
    if (productType.value !== '0') {
      let err = '';
      let specAttrValue = null;
      const basicInps = document.querySelectorAll('.basicInp');
      basicInps.forEach((item) => {
        product[item.id] = item.value;
      });
      if (productType.value === 'Furniture') {
        width = document.querySelector('#width').value;
        height = document.querySelector('#height').value;
        length = document.querySelector('#length').value;
      }
      if (!Validation.validSKU(product.sku)) {
        err
          += '<li>Please, provide a valid SKU with length of 8 symbols. Uppercase letters and numbers allowed</li>';
      }
      if (!Validation.validName(product.name)) {
        err
          += '<li>Please, provide a valid name with min length of 3 symbols. Letters and numbers allowed</li>';
      }
      if (!Validation.validNumInp(product.price)) {
        err += "<li>Please, provide a float type price that's > 0</li>";
      }
      if (productType.value === 'Furniture') {
        if (
          !Validation.validNumInp(width)
          || !Validation.validNumInp(height)
          || !Validation.validNumInp(length)
        ) {
          err
            += '<li>Please, provide a valid (float type) WxHxL. All three are required</li>';
        } else specAttrValue = `${width}x${height}x${length}`;
      } else {
        specAttrValue = document.querySelector('.spec-attr').value;
        if (!Validation.validNumInp(specAttrValue)) {
          err += "<li>Please, provide a float type spec. attr that's > 0</li>";
        }
      }
      if (err.length === 0) {
        product.type = productType.value;
        product.spec_attr = specAttrValue;
        const answer = await Product.store(product);
        if (answer.ok) {
          if (answer.data.errors) {
            const { errors } = answer.data;
            let errorsArray = Object.keys(errors);
            let errorLength = errorsArray.length;
            for (let i = 0; i < errorLength; i += 1) {
              err += `<li>${errors[errorsArray[i]]}</li>`;
            }
            errorsWrapper.innerHTML = err;
          } else return answer.ok;
        }
      } else errorsWrapper.innerHTML = err;
    } else errorsWrapper.innerHTML = '<li>You must select product type</li>';
  };

  delete = async () => {
    const toDelete = document.querySelectorAll('.delete-checkbox:checked');
    const list = [];
    toDelete.forEach((item) => list.push(item.value));
    if (list.length > 0) {
      list.forEach(async (item) => {
        const answer = await Product.delete([item]);
        if (answer.ok) {
          return answer.ok;
        }
      });
    }
  };
}
