import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CircleContaniner,
  PageContainer,
  WhiteSquare,
  WhiteSquareBody,
  WhiteSquareFooter,
  WhiteSquareHeader,
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
        console.log(response.data)

        const initializedData = {
          name: response.data.name,
          temp: Math.round(response.data.main.temp - 273.15), // 섭씨로 변환
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          windSpeed: (response.data.wind.speed * 3.6).toFixed(2), // m/s를 km/h로 변환
          pressure: response.data.main.pressure,
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
            <h1>날씨 정보</h1>
          </WhiteSquareHeader>
          <WhiteSquareBody>
            <CircleContaniner />
            {weatherData && weatherData.main && weatherData.wind ? (
              <div>
                <p>온도: {Math.round(weatherData.main.temp - 273.15)}°C</p>{" "}
                {/* 섭씨로 변환 */}
                <p>습도: {weatherData.main.humidity}%</p>
                <p>풍속: {weatherData.wind.speed} m/s</p>
                <p>기압: {weatherData.main.pressure} hPa</p>
                <p>가시거리: {weatherData.visibility / 1000} km</p>{" "}
                {/* 가시거리 km로 변환 */}
              </div>
            ) : (
              <p>Loading weather data...</p>
            )}
          </WhiteSquareBody>
          <WhiteSquareFooter>
            <p>매시간 업데이트되는 날씨 정보</p>
          </WhiteSquareFooter>
        </WhiteSquare>
      </PageContainer>
    </div>
  );
}

export default Test;
