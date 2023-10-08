import "./main.css";
import * as yup from "yup";

const firstName: HTMLInputElement = document.querySelector(".nameInput1")!;
const listName: HTMLInputElement = document.querySelector(".nameInput2")!;
const email: HTMLInputElement = document.querySelector(".nameInput3")!;
const owner: HTMLFormElement = document.querySelector(".owner")!;

const kSchema = yup.object().shape({
  firstName: yup.string().required(),
  listName: yup.string().required(),
  email: yup.string().email().required(),
});

owner.addEventListener("submit", (e) => {
  e.preventDefault();

  const ownerData = {
    firstName: firstName.value,
    listName: listName.value,
    email: email.value,
  };

  kSchema
    .validate(ownerData)
    .then(() => {
      console.log(ownerData);
      owner.style.display = "none";
      details.style.display = "block";
    })
    .catch((error) => {
      console.log("Write correctly:", error);
    });
});

const input11: HTMLInputElement = document.querySelector(".input11")!;
const input22: HTMLInputElement = document.querySelector(".input22")!;
const input33: HTMLInputElement = document.querySelector(".input33")!;
const input44: HTMLInputElement = document.querySelector(".input44")!;
const input55: HTMLInputElement = document.querySelector(".input55")!;
const details: HTMLFormElement = document.querySelector(".details")!;

const schema = yup.object().shape({
  inputVAlue11: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "Brand English")
    .required("Brand is required"),
  inputVAlue21: yup.string().required("Name is required"),
  inputVAlue31: yup
    .string()
    .url("Invalid website URL")
    .required("Website is required"),
  inputVAlue41: yup.string().required("Country is required"),
  inputVAlue51: yup.string().required("Category is required"),
});

details.addEventListener("submit", (e) => {
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
      details.style.display = "none";
      bankAccount.style.display = "block";
    })
    .catch((error) => {
      console.log("write correctly", error);
    });
});

const benName: HTMLInputElement = document.querySelector(".benName")!;
const eban: HTMLInputElement = document.querySelector(".eban")!;
const bankName: HTMLInputElement = document.querySelector(".bankName")!;
const cartNumber: HTMLInputElement = document.querySelector(".cartNumber")!;
const vale: HTMLInputElement = document.querySelector(".vale")!;
const bankAccount: HTMLFormElement = document.querySelector(".bankAccount")!;

const bSchema = yup.object().shape({
  benName: yup.string().required(),
  eban: yup.string().required(),
  bankName: yup.string().required(),
  cartNumber: yup
    .string()
    .matches(/^[\d\s]{14,19}$/, "Invalid card number")
    .required(),
  vale: yup.string().required(),
});

bankAccount.addEventListener("submit", (e) => {
  e.preventDefault();

  const bankData = {
    benName: benName.value,
    eban: eban.value,
    bankName: bankName.value,
    cartNumber: cartNumber.value,
    vale: vale.value,
  };

  bSchema
    .validate(bankData)
    .then(() => {
      console.log(bankData);
    })
    .catch((error) => {
      console.error("Write correctly:", error);
    });
});
