import router from '@/router';
import {
  ConfigurationCallback, render, RenderOptions, RenderResult,
} from '@testing-library/vue';
import { VueClass } from '@vue/test-utils';
import Vue, { ComponentOptions } from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

/**
 * Renders a component with all necessary dependencies.
 *
 * VueCompositionAPI, Vuetify
 */
export function renderComponent<V extends Vue>(
  component: VueClass<V> | ComponentOptions<V>,
  options?: RenderOptions<V>,
  callback?: ConfigurationCallback<V>,
): RenderResult {
  const root = document.createElement('div');
  root.setAttribute('data-app', 'true');

  return render(
    component,
    {
      container: document.body.appendChild(root),
      router,
      vuetify: new Vuetify(),
      ...options,
    },
    callback,
  );
}
