import NilavuURL from 'nilavu/lib/url';
import {
    logCategoryPanel
} from 'nilavu/components/log-category-panel';
import {
    on,
    computed,
    observes
} from 'ember-addons/ember-computed-decorators';

export default logCategoryPanel('all', {
    allMessages: [],

    @observes('message')
    messages() {
        const msg = this.get('message'),
            ss = JSON.parse(this.get('message').Message);
        this.get('allMessages').pushObject({
            source: ss.Source,
            type: ss.Type,
            color: "log-"+ss.Type.toLowerCase(),
            message: ss.Message,
            timestamp: msg.Timestamp,
        });
    },
});
