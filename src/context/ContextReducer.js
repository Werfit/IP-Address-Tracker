// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case 'FIND':
            return {
                ip_address: action.payload.ip,

                isp: action.payload.isp,
                timezone: `UTC ${action.payload.location.timezone}`,
                city: action.payload.location.city,

                location: [action.payload.location.lat, action.payload.location.lng]
            }
        default: return state
    }
}