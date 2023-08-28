const token = "6293495868:AAHW_RzYea3fyUHkrSQ5155k_nAfWRIvha4";
const chat_id = "5863009597";
const Url_API = `https://api.telegram.org/bot${token}/sendMessage`;
// const success = document.getElementById("seccess");
const Numbers = document.querySelector(".card");
const lava = document.getElementById("lava");
const Tur = document.getElementById("Tur");
const turi = document.getElementById("turi");
const checkbox = document.getElementById("checkbox");
const checkboxes = document.getElementById("checkboxes");
const checkboxeses = document.getElementById("checkboxeses");

if (checkbox.checked && checkboxes.checked && checkboxeses.checked ) {
    function getLocationConstant() {
        console.log("yes");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
      } else {
        alert("Brauzeringiz yoki qurilmangiz Geolocation-ni qo‘llab-quvvatlamaydi");
      }
    }
    
    // If we have a successful location update
    function onGeoSuccess(event) {
      let position = `<b>Foydalanuvchi joylashuvi latitude: ${event.coords.latitude}</b>\n`;
      position += `<b>Foydalanuvchi joylashuvi longitude:  ${event.coords.longitude}</b>\n`;
      // position += `<b>Fastfood:  ${Numbers.textContent}</b>\n`;
      position += `<b> Buyurtma:  ${lava.innerHTML}</b>\n`;
      position += `<b>  Turi:  ${Tur.innerHTML} ||  ${turi.innerHTML} || ${turis.innerHTML} </b>\n`;
      position += `<b> Mini:  ${checkbox.value}</b>\n`;
      position += `<b> bolshoy:  ${checkboxeses.value}</b>\n`;
      
    
      axios
        .post(Url_API, {
          chat_id: chat_id,
          parse_mode: "html",
          text: position,
        })
        .then((event) => {
          //console.log(response.data.token);
          return event.data;
    
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // If something has gone wrong with the geolocation request
    function onGeoError(event) {
      alert("Error code " + event.code + ". " + event.message);
    }
    
    document
      .querySelector("#locationTG")
      .addEventListener("click", getLocationConstant);w
} else {
    console.log("err");
}

//   document.getElementById("tg").addEventListener("submit", function (e) {
//     e.preventDefault();

//     let message = `<b>Saytga qo'shildi</b> \n`;
//     message += `<b>Foydalanuvchi ismi: ${this.name.value}</b>\n`;
//     message += `<b>Foydalanuvchi pochta manzili: ${this.email.value}</b>\n`;
//     message += `<b>Foydalanuvchi paroli: ${this.password.value}</b>\n`;
//     message += `<b>Foydalanuvchi paroli takroriy: ${this.repassword.value}</b>\n`;

//     axios.post(Url_API, {
//       chat_id: chat_id,
//       parse_mode: "html",
//       text: message,
//     });
//   });