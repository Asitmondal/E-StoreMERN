import {apiSlice} from './apiSlice';
import { USERS_URL} from '../constants';


export const userApiSlice = apiSlice.injectEndpoints({
    
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserDetailsQuery,
} = userApiSlice;