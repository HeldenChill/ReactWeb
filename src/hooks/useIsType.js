import {selectorAuthProvider } from '../features/AuthProvider'
import { useSelector } from 'react-redux';

const useIsType = (_accountType) => {
    const accountState = useSelector(selectorAuthProvider)
    return _accountType === accountState.accountType ? true : false
}

export default useIsType