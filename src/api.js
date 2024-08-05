import axios from 'axios';
const API_URL = "http://127.0.0.1:5001";

export const loginUser = async(email, password, isVendor) =>{
    try{
        const response = await axios.post(`${API_URL}/logging`, { email_id: email, password, is_vendor: isVendor });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};



const api = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  


export const updatePassword = async (customerId, email, oldPassword, newPassword) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${API_URL}/update_password`, 
            { customer_id: customerId, email_id: email, old_password: oldPassword, new_password: newPassword },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/customer/registration`, userData);
        if (response && response.data) {
            return response.data;
        } else {
            throw new Error('Invalid response from server');
        }
    } catch (error) {
        console.error('Error during registration:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
        } else if (error.request) {
            console.error('Request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        throw error;
    }
};
export const logoutUser = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const registerVendor = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/vendor/registration`, userData);
        if (response && response.data) {
            return response.data;
        } else {
            throw new Error('Invalid response from server');
        }
    } catch (error) {
        console.error('Error during registration:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
        } else if (error.request) {
            console.error('Request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        throw error;
    }
};

export const phoneOtp = async(phoneNo)=>{
    try{
        const response = await axios.post(`${API_URL}/send_otp_phone`,{ phone_no: phoneNo});
        return response.data;
    }catch (error){
        throw error.response.data;
    }
};

export const verifyPhOtp = async(phoneNo, otp)=>{
    try{
        const response = await axios.post(`${API_URL}/verify_otp_phone`,{ phone_no: phoneNo, otp: otp});
        return response.data;
    }catch (error){
        throw error.response.data;
    }
};

export const emailOtp = async(mailId)=>{
    try{
        const response = await axios.post(`${API_URL}/send_otp_email`,{ email_id: mailId});
        return response.data;
    }catch (error){
        throw error.response.data;
    }
};

export const verifyMailOtp = async(mailId, otp)=>{
    try{
        const response = await axios.post(`${API_URL}/verify_email`,{ email_id: mailId, otp_email: otp});
        return response.data;
    }catch (error){
        throw error.response.data;
    }
};

export const getBeautyArtist = async (service) => {
    try {
        const response = await axios.get(`${API_URL}/beautyartisan/${service}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getEntertainment = async (service) => {
    try {
        const response = await axios.get(`${API_URL}/entertainments/${service}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getDigitalService = async (service) => {
    try {
        const response = await axios.get(`${API_URL}/digital_service/${service}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getMehendiArtist = async (service) => {
    try {
        const response = await axios.get(`${API_URL}/mehendiartist/${service}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getEventOrganizer = async (service) => {
    try {
        const response = await axios.get(`${API_URL}/event_organizer/${service}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getThemeAndDecor = async (service) => {
    try {
        const response = await axios.get(`${API_URL}/themanddecor/${service}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const notify = async (bookingData) => {
    try {
      const response = await api.post('/notification', bookingData);
      return response.data;
    } catch (error) {
      alert('Error during notification:', error);
      handleAxiosError(error);
      throw error;
    }
  }
  const handleAxiosError = (error) => {
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    } else if (error.request) {
      console.error('Request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
}

export const getNotification = async () => {
    try {
        const response = await api.get('/getNotification');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateNotification = async (notify_id, status_val) => {
    try {
        const response = await api.post('/update_notification_status', {
            notification_id: notify_id,
            status: status_val
        });
        return response.data;
    } catch (error) {
        console.error('Error during notification update:', error);
        handleAxiosError(error);
        throw error;
    }
};

export const pendingOrders = async () => {
    try {
        const response = await api.get('/getpendingorder');
        return response.data;
    } catch (error) {
        console.error('Error during notification update:', error);
        handleAxiosError(error);
        throw error;
    }
};

export const upcommingEvents = async () => {
    try {
        const response = await api.get('/upcoming_events');
        return response.data;
    } catch (error) {
        console.error('Error during notification update:', error);
        handleAxiosError(error);
        throw error;
    }
};

export const addToWishlist =async (vendor_id)=>{
    try{
        const response = await api.post('/wishlist', {vendor_service_id: vendor_id});
        return response.data;
    }
    catch(err){
        console.error('Error during notification update:', err);
        handleAxiosError(err);
        throw err;
    }
}

export const getAllWishlist = async ()=>{
    try{
        const response = await api.get('/allwishlist');
        return response.data;
    }catch(err){
        console.error('Error during notification update:', err);
        handleAxiosError(err);
        throw err;
    }
}

export const removeToWishlist =async (vendor_id)=>{
    try{
        const response = await api.post('/removewishlist', {vendor_service_id: vendor_id});
        return response.data;
    }
    catch(err){
        console.error('Error during notification update:', err);
        handleAxiosError(err);
        throw err;
    }
}