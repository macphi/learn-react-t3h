import { Navigate, useOutlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import LayoutMovie from './Layout'

export const ProtectedLayout = ({ children }) => {
    const { user } = useAuth()
    const outlet = useOutlet()

    if (user === null) {
        return <Navigate to='/login' />
    }
    return (
        <>
            <>
                {children}
            </>
            {outlet}
        </>
    )

}

