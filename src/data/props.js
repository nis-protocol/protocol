import React from "react";
export const globalProps = {
    table: {
        scroll: { x: true },
        style: {
            whiteSpace: "nowrap"
        },
        // pagination: {
        //     showSizeChanger: true,
        //     showTotal: sum => <div>{sum} Item</div>
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
        sm:10,
        xs: 10
    },
    col10: {
        xxl: 8,
        xl: 8,
        lg: 8,
        md: 8,
        sm:14,
        xs: 14
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
        xxl: 8,
        xl: 8,
        lg: 8,
        md: 8,
        sm: 12,
        xs: 12
    },
    col4: {
        xxl: 4,
        xl: 4,
        lg: 4,
        md: 4,
        sm:24,
        xs: 24
    },
    col5: {
        xxl: 8,
        xl: 8,
        lg: 8,
        md: 8,
        sm:24,
        xs: 24
    },
    col6: {
        xxl: 16,
        xl: 16,
        lg: 16,
        md: 16,
        sm:24,
        xs: 24
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
    form: {
        labelAlign: "right",
        layout: "vertical",
        scrollToFirstError: true
      },
    content: {
            padding: '0 50px',
            marginTop: 64
    }
}

export const format = {
    date: "YYYY/DD/MM",
    dateTime: "YYYY/DD/MM HH:mm",
    dateTimes: "YYYY/DD/MM HH:mm:ss",
}