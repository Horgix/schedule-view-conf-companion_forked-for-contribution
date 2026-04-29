<template>
  <router-link
    class="talk"
    :class="[talk.kind, talk.metadata.topic.label, talk.aws]"
    :to="`/${talk.id}`"
  >
    <div class="time">
      <span>{{ start }} - {{ end }}</span><span>{{ talk.room }}</span>
    </div>
    <div class="title">
      {{ talk.title | truncate(70) }}
    </div>
    <div class="speakers">
      {{ talk.speakers.map(speaker => speaker.name).join(', ') }}
    </div>
  </router-link>
</template>

<script lang="ts">
import moment from 'moment';
import Vue from 'vue';

export default Vue.extend({
  name: 'Talk',
  props: ['talk'],
  computed: {
    start: function () {
      return moment(this.talk.fromTime).format('HH:mm');
    },
    end: function () {
      return moment(this.talk.toTime).format('HH:mm');
    }
  }
});
</script>

<style scoped lang="scss">
@import "../styles/variables";

.talk {
  padding: 6px;
  border-radius: $radius;
  box-shadow: $shadow;
  display: flex;
  flex-direction: column;
  width: auto;
  flex-grow: 1;
  flex-wrap: wrap;

  &.keynote {
    background-color: $primary;
    color: $text-on-primary;
    border-left: none;

    .title {
      height: auto;
    }
  }
  &.yesAWS {
    background-color: #cc6600;
  }

  &:hover {
    background-color: darken(white, 10);

    &.keynote {
      background-color: darken($primary, 10);
    }
    &.yesAWS {
      background-color: darken(#bb5500, 10);
    }
  }
}

.time {
  font-size: .6em;
  margin-bottom: 5px;
  opacity: .8;
  display: flex;
  justify-content: space-between;
}

.title {
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-size: .9em;
  line-height: 1em;
}

.speakers {
  font-size: .8em;
  opacity: .8;
  margin-top: 5px;
  display: flex;
  margin-left: auto;
  /* TODO: truncate if too large */
}


.Agile, .Produit, .Green, .Stratégie {
  border-left: solid 3px $product;
}

.Experience, .Design {
  border-left: solid 3px $experience;
}

.Mobile, .Engineering, .Craft, .Sécurité, .Cloud {
  border-left: solid 3px $engineering;
}

.Data, .AI {
  border-left: solid 3px $data;
}

.AI {
  background: url('data:image/svg+xml;utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20126%2069%22%20width=%22126%22%20height=%2269%22%20style=%22opacity:%200.25;filter:%20hue-rotate(210deg);%22%3E%3Ctext%20x=%220em%22%20y=%221em%22%20font-size=%2230%22%3E%E2%9C%A8%3C/text%3E%3Ctext%20x=%221em%22%20y=%222em%22%20font-size=%2230%22%3E%E2%9C%A8%3C/text%3E%3Ctext%20x=%222em%22%20y=%221em%22%20font-size=%2230%22%3E%E2%9C%A8%3C/text%3E%3Ctext%20x=%223em%22%20y=%222em%22%20font-size=%2230%22%3E%E2%9C%A8%3C/text%3E%3C/svg%3E') repeat;
  background-size: 126px 69px;
}
.Other {
  border-left: solid 3px $other;
}
</style>
