import './ExpenseDate.css';

export default function ExpenseDate(props) {
   const {Month, Year,Day} = props.props;

    return (  <div className='p-1 m-4 text-sm border rounded-lg aspect-square h-1/2'>
    <div>{Month}</div>
    <div>{Year}</div>
    <div className="Date-day">{Day}</div>
</div>);
}
