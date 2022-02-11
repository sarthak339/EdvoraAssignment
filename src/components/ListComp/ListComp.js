import './ListComp.css'
import FilterList from './FilterList/FilterList'

const ListComp = (props) => {
  return (
    <div className="list">
      <div className="titles">
        <p className="title">Filter</p>
      </div>
      <div className="filterLists">
        <FilterList filterData={props.listData} />
      </div>
    </div>
  )
}

export default ListComp
