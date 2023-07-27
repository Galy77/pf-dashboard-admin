import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../../redux/actions';

function RestartUserFilters () {
    const dispatch = useDispatch();

    const clickHandler = () => {
            dispatch(getAllUsers())
    }

    return (
        <>
            <Button variant="transparent" onClick={() => clickHandler()}><i class="bi bi-arrow-clockwise"></i></Button>
        </>
    )
}

export default RestartUserFilters;