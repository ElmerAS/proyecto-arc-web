import { CONTENT_BASE } from 'fusion:environment';

export default {
  resolve(key) {
    return `${ CONTENT_BASE }/site/v3/navigation/${key["arc-site"]}?hierarchy=${key.hierarchy ? key.hierarchy : 'default'}`
    //return `${ CONTENT_BASE }/site/v3/hierarchy/${ key.hierarchy ? key.hierarchy : 'default'}`
  },
  schemaName: "site-navigation",
  params: {hierarchy: 'text'}
}