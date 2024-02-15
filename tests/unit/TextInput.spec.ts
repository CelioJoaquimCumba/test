import { shallowMount } from "@vue/test-utils";
import TextInput from "@/components/TextInput.vue";
import TextInpu from "@/components/TextInput.vue";

describe("TextInput.vue", () => {
  it("renders placeholder when passed", () => {
    const placeholder = "Enter your name...";
    const wrapper = shallowMount(TextInput, {
      propsData: {
        placeholder: placeholder,
      },
    });

    expect(wrapper.find("input").attributes("placeholder")).toBe(placeholder);
  });

  it("updates inputValue when input changes", async () => {
    const wrapper = shallowMount(TextInput);
    const input = wrapper.find("input");

    await input.setValue("Hey");

    expect(wrapper.find("input").vm.$data.inputValue).toBe("Hey");
  });

  it("Emits input event with correct value when user types", async () => {
    const wrapper = shallowMount(TextInput);
    const input = wrapper.find("input");

    await input.setValue("Hey");

    expect(wrapper.emitted("input")).toBeTruthy();
    expect(wrapper.emitted("input")![0][0]).toBe("Hey");
  });
});
