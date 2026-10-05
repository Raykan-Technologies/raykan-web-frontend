<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'
import { FAQ_KEYS } from '../questions'

const { t, tm, rt } = useI18n()
const id = useId()


const questions = computed(() => FAQ_KEYS.map((key) => ({
  key,
  question: t(`faq.questions.items.${key}.question`),
  answer: (tm(`faq.questions.items.${key}.answer`) as Array<string>).map((line) => rt(line)),
})))

// several can be open at once, like the WP toggle
const open = ref<Set<string>>(new Set())

const toggle = (key: string) => {
  const next = new Set(open.value)
  if (!next.delete(key)) next.add(key)
  open.value = next
}

// slide the answer open and shut by animating its measured height (works in every browser,
// unlike animating to `height: auto`); reduced motion skips straight to the end
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches

const slide = (el: Element, from: number, to: number, done: () => void) => {
  const panel = el as HTMLElement
  if (reduceMotion()) return done()
  panel.style.height = `${from}px`
  // force the start height to apply before transitioning
  void panel.offsetHeight
  panel.style.height = `${to}px`
  const end = (event: TransitionEvent) => {
    if (event.target !== panel || event.propertyName !== 'height') return
    panel.removeEventListener('transitionend', end)
    done()
  }
  panel.addEventListener('transitionend', end)
}

const onEnter = (el: Element, done: () => void) => slide(el, 0, el.scrollHeight, done)
const onLeave = (el: Element, done: () => void) => slide(el, el.scrollHeight, 0, done)
// back to auto so the panel follows text reflow (resizes, font loading)
const onAfter = (el: Element) => { (el as HTMLElement).style.height = '' }
</script>
<template>
  <!-- wp-raykan FAQ toggle (c86687b): a question per row, the answer slides open below it
    on a grey panel, a divider between rows -->
  <r-section class="questions-section" width="var(--container-width-faq)"
    :aria-label="t('faq.questions.label')">
    <div v-for="item in questions" :key="item.key" class="questions-section__item"
      :class="{ 'questions-section__item--open': open.has(item.key) }">
      <h2 class="questions-section__heading">
        <button :id="`${id}-${item.key}-question`" class="questions-section__question" type="button"
          :aria-expanded="open.has(item.key)" :aria-controls="`${id}-${item.key}-answer`"
          @click="toggle(item.key)">
          <span>{{ item.question }}</span>
          <!-- wp-raykan toggle chevron -->
          <svg class="questions-section__chevron" viewBox="0 0 74 74" aria-hidden="true">
            <path d="M4.66 18.74a4.63 4.63 0 0 1 3.27 1.36l23.65 23.66a7.62 7.62 0 0 0 10.9 0L66.11 20.13a4.63 4.63 0 1 1 6.54 6.54L49.03 50.3a16.95 16.95 0 0 1-23.98 0L1.39 26.64a4.63 4.63 0 0 1 3.27-7.9Z" />
          </svg>
        </button>
      </h2>
      <transition :css="false" @enter="onEnter" @after-enter="onAfter" @leave="onLeave" @after-leave="onAfter">
        <div v-show="open.has(item.key)" :id="`${id}-${item.key}-answer`" class="questions-section__answer"
          role="region" :aria-labelledby="`${id}-${item.key}-question`">
          <div class="questions-section__answer-body">
            <p v-for="(paragraph, index) in item.answer" :key="index">{{ paragraph }}</p>
          </div>
        </div>
      </transition>
    </div>
  </r-section>
</template>
<style lang="scss">
.questions-section {
  // wp-raykan 150px above and below
  padding-block: 150px;

  > .r-section__container {
    gap: 0;
  }

  // 30px apart with the divider halfway between, under the answer when it's open
  .questions-section__item {
    position: relative;
    margin-bottom: 30px;

    &::after {
      position: absolute;
      right: 0;
      bottom: -15px;
      left: 0;
      height: 1px;
      background-color: var(--color-faq-divider);
      content: '';
    }

    &:last-child {
      margin-bottom: 0;

      &::after {
        display: none;
      }
    }
  }

  .questions-section__heading {
    margin: 0;
  }

  .questions-section__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 12px;
    border: 0;
    border-radius: 8px 8px 0 0;
    background: none;
    color: var(--color-primary);
    font-family: var(--font-secondary);
    font-size: var(--font-size-faq-question);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-faq-question);
    text-align: left;
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
  }

  // points down when closed, flips up when open
  .questions-section__chevron {
    flex-shrink: 0;
    width: 1em;
    height: 1em;
    fill: currentColor;
    transition: transform 0.3s ease;
  }

  .questions-section__item--open .questions-section__chevron {
    transform: rotate(180deg);
  }

  // height is animated from script (see slide())
  .questions-section__answer {
    overflow: hidden;
    transition: height 0.3s ease;
  }

  .questions-section__answer-body {
    padding: 12px 10px;
    border-bottom: 1px solid var(--color-faq-answer-border);
    border-radius: 0 0 8px 8px;
    background-color: var(--color-faq-answer-bg);
    color: var(--color-faq-answer-text);
    font-family: var(--font-secondary);
    font-size: var(--font-size-faq-answer);
    line-height: var(--line-height-faq-answer);

    p {
      margin: 0 0 1em;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .questions-section__chevron,
    .questions-section__answer {
      transition: none;
    }
  }
}
</style>
