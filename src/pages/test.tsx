import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CircleContainer,
  PageContainer,
  WhiteSquare,
  WhiteSquareBody,
  WhiteSquareFooter,
  WhiteSquareHeader,
  InformationContainer,
  InformationHeader,
  InformationFooterContainer,
} from "./board.styles";

const city = "Seoul";
const apikey = "90a3407faa25109f22983841f183e57e";
const lang = "kr";

const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}`;

function Test() {
  const [weatherData, setWeatherData] = useState({
    name: "",
    main: {
      temp: 0,
      humidity: 0,
      pressure: 0,
    },
    wind: {
      speed: 0,
    },
    visibility: 0,
    weather: [
      {
        description: "",
        icon: "",
      },
    ],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(api);
        console.log(response.data);

        const initializedData = {
          name: response.data.name,
          main: {
            temp: response.data.main.temp,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
          },
          wind: {
            speed: response.data.wind.speed,
          },
          visibility: response.data.visibility,
          weather: [
            {
              description: response.data.weather[0].description,
              icon: response.data.weather[0].icon,
            },
          ],
        };
        setWeatherData(initializedData);
        setLoading(false);
      } catch (error) {
        console.error("There was a problem with the request:", error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // 로딩 중 표시
  }

  if (!weatherData) {
    return <div>Error fetching weather data.</div>; // 오류 처리
  }

  return (
    <div>
      <PageContainer>
        <WhiteSquare>
          <WhiteSquareHeader>
            <InformationHeader>날씨 정보</InformationHeader>
          </WhiteSquareHeader>
          <WhiteSquareBody>
            <CircleContainer />
            <InformationContainer>
              {weatherData && weatherData.main ? (
                <>
                  <p>위치: {weatherData.name}</p>
                  <p>
                    온도: {Math.round(weatherData.main.temp - 273.15)}°C
                  </p>{" "}
                  {/* 섭씨로 변환 */}
                  <p>습도: {weatherData.main.humidity}%</p>
                  <p>풍속: {weatherData.wind.speed} m/s</p>
                  <p>기압: {weatherData.main.pressure} hPa</p>
                  <p>가시거리: {weatherData.visibility / 1000} km</p>{" "}
                  {/* 가시거리 km로 변환 */}
                </>
              ) : (
                <p>Loading weather data...</p>
              )}
            </InformationContainer>
          </WhiteSquareBody>
          <WhiteSquareFooter>
            <InformationFooterContainer>
              맑은 날: "오늘은 화창한 날씨입니다. 자외선 차단제를 꼭 바르세요!☀️" 
              추운 날: "기온이 많이 내려갔습니다. 외출 시 따뜻한 옷을입으세요! 🧥" 
              바람이 강한 날: "강풍이 예상됩니다. 야외 활동 시주의하세요! 🌬" 
              습한 날: "습도가 높습니다. 실내 환기를 자주시켜주세요! 🏡" 
              더운 날: "더운 날씨엔 수분 섭취를 충분히 하고,시원한 곳에서 휴식하세요! 💧"
            </InformationFooterContainer>
          </WhiteSquareFooter>
        </WhiteSquare>
      </PageContainer>
    </div>
  );
}

export default Test;
