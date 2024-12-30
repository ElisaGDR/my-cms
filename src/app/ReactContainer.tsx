import { defineComponent, ref, onMounted } from "vue";
import ReactDOM from "react-dom/client"; 
import React from "react"; 
import App from "./App";

export default defineComponent({
    name: "ReactContainer",
    setup() {
        const containerRef = ref<HTMLElement | null>(null);

        onMounted(() => {
            if (containerRef.value) {
                
                const root = ReactDOM.createRoot(containerRef.value); 
                root.render(<App />);
            }
        });

        return { containerRef };
    },
    template: `<div ref="containerRef"></div>`,
});
