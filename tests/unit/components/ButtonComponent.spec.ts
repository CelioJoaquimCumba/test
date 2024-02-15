import { mount, shallowMount } from "@vue/test-utils";
import ButtonComponentVue from "@/components/ButtonComponent.vue";

describe("ButtonComponent.vue", () => {
  it("renders props.value when passed", () => {
    const value = "click me";
    const wrapper = shallowMount(ButtonComponentVue, {
      propsData: { value },
    });
    expect(wrapper.text()).toMatch(value);
  });

  it("triggers props click function when clicked", async () => {
    const mockCallBack = jest.fn();
    const value = "click me";
    const wrapper = shallowMount(ButtonComponentVue, {
      propsData: {
        value,
        onClick: mockCallBack,
      },
    });
    wrapper.find("button").trigger("click");
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it("loads when props load is true", async () => {
    const loading = true;
    const wrapper = mount(ButtonComponentVue, {
      propsData: {
        loading,
      },
    });
    expect(wrapper.find("div.animate-spin").exists()).toBe(true);
  });
});
