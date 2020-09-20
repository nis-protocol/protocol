import React from "react";
export const globalProps = {
    table: {
        scroll: { x: true },
        style: {
            whiteSpace: "nowrap"
        },
        // pagination: {
        //     showSizeChanger: true,
        //     showTotal: sum => <div>{sum} <Translate id="ITEM" /></div>
        // }
    },
    tableNoPagination: {
        size: "small",
        bordered: true,
        scroll: { x: true },
        style: {
            whiteSpace: "nowrap"
        },
        pagination: false
    },
    tableRow: {
        ellipsis: true,
        width: 200
    },
    col9: {
        xxl: 8,
        xl: 8,
        lg: 8,
        md: 8,
        sm:6,
        xs: 6
    },
    col10: {
        xxl: 8,
        xl: 8,
        lg: 8,
        md: 8,
        sm:16,
        xs: 16
    },
    col: {
        xxl: 8,
        xl: 8,
        lg: 8,
        md: 8,
        sm:12,
        xs: 12
    },
    col1: {
        xxl: 8,
        xl: 8,
        lg: 8,
        md: 8,
        sm:24,
        xs: 24
    },
    col2: {
        xxl: 16,
        xl: 16,
        lg: 16,
        md: 24,
        xs: 24
    },
    col3: {
        span: 24
    },
    col4: {
        xxl: 3,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 3,
        xs: 24
    },
    col5: {
        xxl: 6,
        xl: 6,
        lg: 6,
        md: 6,
        sm: 6,
        xs: 24
    },
    col6: {
        xxl: 6,
        xl: 6,
        lg: 6,
        md: 6,
        sm: 6,
        xs: 12
    },
    col7: {
        xxl: 4,
        xl: 4,
        lg: 2,
        md: 24,
        sm: 24,
        xs: 24
    },
    col8: {
        xxl: 16,
        xl: 16,
        lg: 20,
        md: 24,
        sm: 24,
        xs: 24
    },
    colHalf: {
        xxl: 12,
        xl: 12,
        lg: 12,
        md: 12,
        xs: 24
    },
    row: {
        gutter: [32, 0]
    },
    formItem: {
        className: "custom-form-item"
    },
    content: {
            padding: '0 50px',
            marginTop: 64
    }
}

export const format = {
    date: "DD/MM/YYYY",
    dateTime: "DD/MM/YYYY HH:mm",
    dateTimes: "DD/MM/YYYY HH:mm:ss",
}