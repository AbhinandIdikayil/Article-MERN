

export const dateTo4y2m2d = (todate: string): string => {
    if(!todate){
        return ''
    }
    const date = new Date(todate);
    const formattedDate = date.toISOString().split('T')[0]; // Extract the date part
    return formattedDate
}