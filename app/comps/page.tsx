import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog } from "@/components/ui/dialog";
import { Drawer } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Popover } from "@/components/ui/popover";
import { Select } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";

export default function Comps() {
  return (
    <div
      style={{
        width: "650px",
        margin: "0 auto",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Comps</h1>
      <Button variant="outline">Корзина</Button>
      <Checkbox defaultChecked />
      <Dialog open />
      <Drawer />
      <Input />
      <Popover defaultOpen />
      <Select value="1" />
      <Skeleton />
      <Slider />
    </div>
  );
}
