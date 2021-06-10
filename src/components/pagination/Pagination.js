import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from "./Pagination.module.css"

const CustomPagination = ({ tasks }) => {
    console.log("pagination...", tasks)
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);

    return (
        <div>
            {
                tasks.map((item, index) => {
                    return <div key={index}>
                        {item.title}
                    </div>
                })
            }
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(CustomPagination)
