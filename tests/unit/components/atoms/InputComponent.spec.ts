import { shallowMount } from "@vue/test-utils";
import InputComponentVue from "@/components/atoms/InputComponent.vue";

describe("InputComponentVue", () => {
  it("renders props.value when passed", () => {
    const label = "label-input";
    const wrapper = shallowMount(InputComponentVue, {
      propsData: { label },
    });
    expect(wrapper).toBeTruthy();
  });
});
