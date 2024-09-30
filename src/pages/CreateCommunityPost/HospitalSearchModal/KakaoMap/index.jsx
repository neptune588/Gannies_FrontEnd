import { useEffect } from 'react';

export default function KakaoMap({ isListSelected, keyword, setIsMapSearch }) {
  const { kakao } = window;

  useEffect(() => {
    setIsMapSearch(true);
    if (isListSelected) {
      kakao.maps.load(() => {
        try {
          const mapContainer = document.getElementById('map');
          const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
          const mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 2, // 지도의 확대 레벨
          };
          const createMap = new kakao.maps.Map(mapContainer, mapOption);

          // 장소 검색 객체를 생성합니다
          const placeSearch = new kakao.maps.services.Places();

          const displayMarker = (place) => {
            // 마커를 생성하고 지도에 표시합니다
            var marker = new kakao.maps.Marker({
              map: createMap,
              position: new kakao.maps.LatLng(place.y, place.x),
            });

            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function () {
              // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
              infowindow.setContent(
                '<div style="padding:5px;font-size:12px;">' +
                  place.place_name +
                  '</div>'
              );
              infowindow.open(createMap, marker);
            });
          };

          // 키워드 검색 완료 시 호출되는 콜백함수 입니다
          const placesSearchCB = (data, status, pagination) => {
            if (status === kakao.maps.services.Status.OK) {
              // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
              // LatLngBounds 객체에 좌표를 추가합니다
              var bounds = new kakao.maps.LatLngBounds();

              for (var i = 0; i < data.length; i++) {
                displayMarker(data[i]);
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
              }

              // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
              createMap.setBounds(bounds);
            }
          };

          // 키워드로 장소를 검색합니다
          placeSearch.keywordSearch(keyword, placesSearchCB);
        } catch (error) {
          console.error(error);
        }
      });
    }
    //console.log('지도변경');
    setIsMapSearch(false);
  }, [keyword]);

  return (
    <div
      id='map'
      style={{
        width: '100%',
        height: '100%',
      }}
    ></div>
  );
}
