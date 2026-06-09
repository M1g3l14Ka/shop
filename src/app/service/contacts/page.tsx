'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { socials } from "@/data/data"
import { sendContactForm } from "@/app/actions/sendContactForm"
import { IContactForm } from "@/types/types"

export default function ContactPage() {
  const [formData, setFormData] = useState<IContactForm>({ name: "", phone: "", email: "", message: "" })
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<'success' | 'error' | null>(null)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setStatus(null)
    setErrorMsg('')

    const result = await sendContactForm(formData)

    if (result.success) {
      setStatus('success')
      setFormData({ name: "", phone: "", email: "", message: "" })
    } else {
      setStatus('error')
      setErrorMsg(result.error + (result.details ? `: ${result.details}` : ''))
    }

    setIsSending(false)
    setTimeout(() => { setStatus(null); setErrorMsg('') }, 10000)
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-12 text-white">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4">
            Давай <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3d3d3d] to-[#ffffff]">Поговорим</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Есть идея? Проект? Или просто хочешь пообщаться? Я тут -&gt;
          </p>
        </motion.div>

        {status && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-8 p-4 rounded-xl flex items-center gap-3 font-mono ${
              status === 'success'
                ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                : 'bg-red-500/10 border border-red-500/30 text-red-400'
            }`}
          >
            {status === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span>
              {status === 'success'
                ? 'Сообщение ушло! Я скоро вернусь..'
                : `Не-а, ошибка отправки, давай по новой, все ...: ${errorMsg}`
              }
            </span>
          </motion.div>
        )}


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-mono text-xl mb-4 text-orange-600">Я в сети:</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-orange-500/30 hover:scale-105 transition-all"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-mono text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-xl mb-4 text-orange-600">Информация</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span>Россия, удаленный формат</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <span>Отвечаю в течении 24 часов или раньше</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <span>kasionma@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="absolute -translate-y-1/2 w-78 h-100 bg-linear-to-r from-[#3d3d3d] to-[#ffffff]/50 rounded-full blur-[120px] -z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
              <div>
                <label className="block font-mono text-sm text-gray-400 mb-2">Имя</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-mono focus:border-orange-600 focus:outline-none transition-colors"
                  placeholder="Как вас зовут?"
                  required
                  disabled={isSending}
                />
              </div>
              <div>
                <label className="block font-mono text-sm text-gray-400 mb-2">Телефон</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-mono focus:border-orange-600 focus:outline-none transition-colors"
                  placeholder="+7 000 000 00 00"
                  required
                  disabled={isSending}
                />
              </div>
              <div>
                <label className="block font-mono text-sm text-gray-400 mb-2">Почта</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-mono focus:border-orange-600 focus:outline-none transition-colors"
                  placeholder="текст@email.com"
                  required
                  disabled={isSending}
                />
              </div>
              <div>
                <label className="block font-mono text-sm text-gray-400 mb-2">Сообщение</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-mono focus:border-orange-600 focus:outline-none transition-colors resize-none h-32"
                  placeholder="Какаво ваше предложение? "
                  required
                  disabled={isSending}
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 border hover:border-orange-600 rounded-xl py-3 font-mono text-white hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSending ? (
                  <span className="animate-pulse">Sending...</span>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5 pl-3" />
                    Отправленно (одного достаточно)!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Отправить сообщение
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
