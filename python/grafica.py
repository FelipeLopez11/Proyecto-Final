import matplotlib.pyplot as plt

# Datos para Colombia (2024-2025)
fuentes = ['Hidroeléctrica', 'Solar', 'Eólica', 'Fósil', 'Hidrógeno verde']
participacion = [58, 4, 8, 30, 0.1]  # Porcentaje estimado de participación en generación eléctrica

# Crear la gráfica de barras
plt.bar(fuentes, participacion, color='green', width=0.5, label='Generación 2025', edgecolor='black')

# Título y etiquetas
plt.title("Participación por fuente en la generación eléctrica - Colombia 2024-2025")
plt.xlabel('Fuentes de energía', fontsize=14)
plt.ylabel('Participación (%)', fontsize='medium')

# Leyenda y estilo
plt.legend(loc='upper right')
plt.grid(visible=False)

# Mostrar la gráfica
plt.show()