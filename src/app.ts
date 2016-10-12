import Component from 'vue-class-component'
import * as Vue from "vue";
import * as marked from "marked"

@Component({
  props: {
  },
  template: `
    <div>
      <textarea v-model="source" placeholder="paste markdown here"></textarea>
      <div v-html="marked()"></div>
    </div>
  `
})
export class App extends Vue {
  source: string
  marked(){
    return marked.parse(this.source)
  }
  data():any{
    return {
      source: ""
    }
  }
}