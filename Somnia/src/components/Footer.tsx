import { motion } from 'motion/react';
import { Moon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16"
        >
          <div className="flex items-center gap-2">
            <Moon className="text-soft-purple w-6 h-6" />
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">SOMNIA</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-soft-purple transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-soft-purple transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-soft-purple transition-colors">Contato</a>
          </div>
          
          <p className="text-sm font-medium text-slate-400">
            © {new Date().getFullYear()} Somnia. Todos os direitos reservados.
          </p>
        </motion.div>

        <div className="pt-12 border-t border-slate-100 text-center">
          <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed max-w-4xl mx-auto uppercase tracking-widest font-medium">
            Este produto não substitui o parecer médico profissional. Sempre consulte um médico para tratar de assuntos relativos à sua saúde. Os resultados podem variar de pessoa para pessoa. Este site não faz parte do Facebook ou do Google. Além disso, este site NÃO é endossado pelo Facebook ou Google de nenhuma maneira. FACEBOOK e GOOGLE são marcas comerciais de suas respectivas empresas.
          </p>
        </div>
      </div>
    </footer>
  );
};
