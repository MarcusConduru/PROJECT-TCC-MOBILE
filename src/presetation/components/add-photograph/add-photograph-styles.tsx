import styled from 'styled-components/native';

export const PhotographContainer = styled.View``;

export const PhotographContent = styled.View`
  position: relative;
  justify-content: center;
`;

export const PhotographButton = styled.TouchableOpacity`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 50px;
  padding: 10px 20px;
  margin: 12px 0;
  border-width: 2.5px;
  border-color: #f8c6d5;
`;

export const PhotographImagesBox = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const PhotographImages = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 10px;
  margin: 10px 5px;
`;

export const PhotographText = styled.Text`
  color: white;
  font-family: 'Lato-Bold';
  font-size: 16px;
  margin: -5px 12px 10px;
`;
