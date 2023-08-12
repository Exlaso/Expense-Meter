import './ExpenseDate.css';

export default function ExpenseDate(props) {
   const ItemDate = props.props.date;
    const month = ItemDate.toLocaleString('en-US', { month: 'long' });

    const year = ItemDate.getFullYear();
    const day = ItemDate.toLocaleString('en-US', { day: '2-digit' });
    return (  <div className='border rounded-lg aspect-square p-1 h-1/2 text-sm m-4'>
    <div>{month}</div>
    <div>{year}</div>
    <div className="Date-day">{day}</div>
</div>);
}
