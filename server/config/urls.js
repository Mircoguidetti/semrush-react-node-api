const { semRushApiKey } = require('./keys');

module.exports = (typeApi, domain, database) => {
    switch(typeApi) {
        case 'organic-keywords':
            return `https://api.semrush.com/?type=domain_organic&
                    key=${semRushApiKey}&display_limit=30&
                    display_filter=-%7CPo%7CGt%7C10&export_columns=Ph,Nq,Po&
                    domain=${domain}&display_sort=po_asc&database=${database}&
                    display_offset=4`
    }
}