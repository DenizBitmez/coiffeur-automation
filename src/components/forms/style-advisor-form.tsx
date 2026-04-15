"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getStyleAdvice, StyleAdvisorResponse } from "@/app/style-advisor/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Loader2, Sparkles, Wand2, Lightbulb, Scissors } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const styleAdvisorSchema = z.object({
  hairType: z.string({ required_error: "Lütfen saç tipinizi seçin." }),
  desiredLook: z.string({ required_error: "Lütfen istediğiniz görünümü seçin." }),
  faceShape: z.string().optional(),
  occasion: z.string().optional(),
  currentStylePreference: z.string().optional(),
});

type StyleAdvisorFormValues = z.infer<typeof styleAdvisorSchema>;

const hairTypes = ["düz", "kıvırcık", "dalgalı", "ince", "kalın", "yağlı", "kuru", "boyalı"];
const desiredLooks = ["modern", "klasik", "doğal", "cesur", "bakımlı"];
const faceShapes = ["oval", "yuvarlak", "kare", "kalp", "uzun", "üçgen"];
const occasions = ["günlük", "özel davet", "iş", "tatil", "parti"];

export function StyleAdvisorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<StyleAdvisorResponse | null>(null);
  const { toast } = useToast();

  const form = useForm<StyleAdvisorFormValues>({
    resolver: zodResolver(styleAdvisorSchema),
    defaultValues: {
      hairType: "",
      desiredLook: "",
      faceShape: "",
      occasion: "",
      currentStylePreference: "",
    },
  });

  async function onSubmit(data: StyleAdvisorFormValues) {
    setIsLoading(true);
    setResponse(null);
    try {
      const result = await getStyleAdvice(data);
      if (result) {
        setResponse(result);
      } else {
        throw new Error("Yapay zekadan geçerli bir yanıt alınamadı.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Bir hata oluştu!",
        description:
          error instanceof Error
            ? error.message
            : "Öneriler alınamadı. Lütfen tekrar deneyin.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">Stil Tercihleriniz</CardTitle>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField control={form.control} name="hairType" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Saç Tipi</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl><SelectTrigger><SelectValue placeholder="Saç tipinizi seçin" /></SelectTrigger></FormControl>
                                <SelectContent>{hairTypes.map(type => <SelectItem key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</SelectItem>)}</SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="desiredLook" render={({ field }) => (
                        <FormItem>
                            <FormLabel>İstenen Görünüm</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl><SelectTrigger><SelectValue placeholder="Nasıl bir görünüm istersiniz?" /></SelectTrigger></FormControl>
                                <SelectContent>{desiredLooks.map(look => <SelectItem key={look} value={look}>{look.charAt(0).toUpperCase() + look.slice(1)}</SelectItem>)}</SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="faceShape" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Yüz Şekli (Opsiyonel)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl><SelectTrigger><SelectValue placeholder="Yüz şeklinizi seçin" /></SelectTrigger></FormControl>
                                <SelectContent>{faceShapes.map(shape => <SelectItem key={shape} value={shape}>{shape.charAt(0).toUpperCase() + shape.slice(1)}</SelectItem>)}</SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="occasion" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ortam (Opsiyonel)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl><SelectTrigger><SelectValue placeholder="Hangi ortam için stil arıyorsunuz?" /></SelectTrigger></FormControl>
                                <SelectContent>{occasions.map(occ => <SelectItem key={occ} value={occ}>{occ.charAt(0).toUpperCase() + occ.slice(1)}</SelectItem>)}</SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="currentStylePreference" render={({ field }) => (
                        <FormItem className="md:col-span-2">
                            <FormLabel>Mevcut Stil ve Notlar (Opsiyonel)</FormLabel>
                            <FormControl><Input placeholder="Örn: Saçlarım omuzlarımda, rengini açtırmak istiyorum." {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                </div>
                <Button type="submit" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
                    {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Öneriler Hazırlanıyor...</> : <><Sparkles className="mr-2 h-4 w-4" />Stil Önerileri Al</>}
                </Button>
                </form>
            </Form>
        </CardContent>
      </Card>
      

      {isLoading && (
        <div className="text-center p-8 mt-8">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 font-headline text-lg">Kişisel stil danışmanınız sizin için en iyi önerileri hazırlıyor...</p>
        </div>
      )}

      {response && (
        <div className="mt-12 space-y-8">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Size Özel Stil Raporu</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">{response.summary}</p>
            </div>
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-headline"><Scissors className="mr-2 h-5 w-5 text-primary" />Saç Modeli Önerileri</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {response.hairstyleRecommendations.map((rec, index) => (
                    <div key={index} className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="font-bold text-lg">{rec.name}</h4>
                      <p className="text-foreground/80">{rec.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-headline"><Wand2 className="mr-2 h-5 w-5 text-primary" />Bakım ve Servis Önerileri</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {response.treatmentRecommendations.map((rec, index) => (
                    <div key={index} className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="font-bold text-lg">{rec.name}</h4>
                      <p className="text-foreground/80">{rec.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-headline"><Lightbulb className="mr-2 h-5 w-5 text-primary" />Güzellik İpuçları</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  {response.beautyTips.map((tip, index) => <li key={index}>{tip}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
}
