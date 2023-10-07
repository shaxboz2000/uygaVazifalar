import "./main.css";
import * as yup from "yup";

const input11: HTMLInputElement = document.querySelector(".input11")!;
const input22: HTMLInputElement = document.querySelector(".input22")!;
const input33: HTMLInputElement = document.querySelector(".input33")!;
const input44: HTMLInputElement = document.querySelector(".input44")!;
const input55: HTMLInputElement = document.querySelector(".input55")!;
const form: HTMLFormElement = document.querySelector("form")!;

const schema = yup.object().shape({
  inputVAlue11: yup.string().matches(/^[A-Za-z\s]+$/, "Brand nomi faqat English").required("Brand is required"),
  inputVAlue21: yup.string().required("Name is required"),
  inputVAlue31: yup.string().url("Invalid website URL").required("Website is required"),
  inputVAlue41: yup.string().required("Country is required"),
  inputVAlue51: yup.string().required("Category is required"),
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    inputVAlue11: input11.value,
    inputVAlue21: input22.value,
    inputVAlue31: input33.value,
    inputVAlue41: input44.value,
    inputVAlue51: input55.value,
  };

  schema
    .validate(formData)
    .then(() => {
      console.log(formData);
    })
    .catch((error) => {
      console.log(error);
    });
});
