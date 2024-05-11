import axios from "axios";

const city = "Seoul";
const apikey = "90a3407faa25109f22983841f183e57e";
const lang = "kr";

const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}`;

function test() {
  axios
    .get(api)
    .then((response: { data: unknown }) => {
      console.log(response.data);
    })
    .catch((error: unknown) => {
      // 요청이 실패하면 이곳에서 에러를 처리합니다.
      console.error("There was a problem with the request:", error);
    });

  return <div>test</div>;
}

export default test;
