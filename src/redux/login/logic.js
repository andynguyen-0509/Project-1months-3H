import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/httpRequest';
import token from '../../mock/jwt.json'
// create async actions
const private_key = 'zI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyNDI';
const postLogin = createAsyncThunk('user/login', async (user) => {
    // const response = await api.post(`/v1/auth/login`, user);
    // return response.data;


    /// hàm riêng ra unity
    const encryptedAccessToken = CryptoJS.AES.encrypt(
        access_token,
        private_key
      ).toString();
    
      const encryptedData = {
        ...token.data,
        access_token: encryptedAccessToken,
      };
    
      // Trả về dữ liệu đã mã hóa
      return encryptedData;

});




export { postLogin};