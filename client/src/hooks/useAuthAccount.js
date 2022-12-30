import {selectorAuthProvider } from '../features/AuthProvider'
import { useSelector } from 'react-redux';

const useAuthAccount = () => {
    const accountState = useSelector(selectorAuthProvider)
    return accountState
}

export default useAuthAccount