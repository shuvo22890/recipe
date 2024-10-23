import PropTypes from 'prop-types';

const SidebarTable = ({tableData, tableTitle, addToCurrently}) => {
    const totalRow = tableData.length;
    return (
        <>
            <h4 className='max-w-80 mx-auto text-center border-b text-main font-semibold text-2xl pb-3 mt-6'>{tableTitle} {totalRow<10 && 0}{totalRow}</h4>

            {totalRow>0 && <table className='overflow-x-auto text-left mt-5 text-desc text-base block'>
                <thead>
                    <tr>
                        <th className='px-2 py-4'></th>
                        <th className='px-2 py-4'>Name</th>
                        <th className='px-2 py-4'>Time</th>
                        <th className='px-2 py-4'>Calories</th>
                    </tr>
                </thead>

                <tbody>
                    {tableData.map((row, i)=><tr className='bg-[#28282808]' key={row.recipe_id}>
                        <td className='px-2 py-4 text-main font-semibold'>{i+1}</td>
                        <td className='px-2 py-4'>{row.recipe_name}</td>
                        <td className='px-2 py-4'>{row.preparing_time}</td>
                        <td className='px-2 py-4'>{row.calories}</td>
                        {addToCurrently && <td className='px-2 py-4'>
                        <button
                            className='px-3 py-1 rounded-full text-main text-sm font-medium bg-forBtn'
                            onClick={()=>addToCurrently(row)}
                        >
                            Preparing
                        </button>
                        </td>}
                    </tr>)}
                </tbody>
            </table>}
        </>
    );
};

SidebarTable.propTypes = {
    tableData: PropTypes.array,
    tableTitle: PropTypes.string,
    addToCurrently: PropTypes.func

};

export default SidebarTable;