import styled from 'styled-components/native';

export const ProtectionContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const ProtectionText = styled.Text`
  font-size: 32px;
  color: #fff;
  font-family: 'Inter_500Medium';
  font-weight: bold;
  background-color: #000;
  width: 100%;
  padding: 10px;
  text-align: center;
`;

export const ProtectionMistreatment = styled.Image`
  width: 100%;
  height: 28%;
  object-fit: contain;
`;

export const ProtectionInformation = styled.View`
  justify-content: center;
  width: 100%;
`;

export const ProtectionInfo = styled.Text`
  color: #000;
  padding: 4px 2px;
  font-size: 15px;
`;

export const ProtectionButton = styled.Button``;
