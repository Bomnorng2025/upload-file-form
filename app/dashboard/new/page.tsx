import ProductForm from "@/components/product-form";
// import ProductForm1 from "@/components/productForm";
// import { SonnerDemo } from "@/components/toast-test";

export default function test_toast() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* <SonnerDemo /> */}
      <ProductForm initialData={null} pageTitle={""} />
    </div>
  );
}
